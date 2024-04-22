import { useState, useEffect, FormEvent } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
type Props = {};

export default function Rate({}: Props) {
  const [rate, setRate] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (rate == null) return;

    const stringified = JSON.stringify({ rate, comment });
    // add to local storage
    localStorage.setItem("rated", stringified);

    fetch("https://tijmevh.nl:8080/rate", {
      method: "POST",
      headers: {
        "Title": "New rating",
        "Priority": "high",
		"Tags": `${"star,".repeat(rate)}`,

      },
      body: comment,
    });

    setHasVoted(true);
  };

  useEffect(() => {
    if (localStorage.getItem("rated") != null) {
      setHasVoted(true);
      setRate(JSON.parse(localStorage.getItem("rated")!).rate);
      setComment(JSON.parse(localStorage.getItem("rated")!).comment);
    }
  }, []);

  return (
    <section className="rate">
      <h2>Rating</h2>
      <p>
        {hasVoted
          ? "Thanks for rating this website!"
          : "Please give a rating for this website."}
      </p>
      <form onSubmit={submit}>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((number) => (
            <label key={number}>
              <input
                onClick={() => {
                  if (!hasVoted) setRate(number);
                }}
                type="radio"
                name="rate"
                value={number}
              />
              {rate == null || rate < number ? (
                <BsStar className="star" />
              ) : (
                <BsStarFill className="star" />
              )}
            </label>
          ))}
        </div>
        <input
          disabled={hasVoted}
          type="text"
          name="comment"
          id="comment"
          placeholder="Comment"
          value={comment}
          onChange={(e) => {
            if (!hasVoted) setComment(e.target.value);
          }}
        />
        <button disabled={hasVoted} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
