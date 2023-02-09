import React, { useEffect } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
type Props = {};

export default function Rate({}: Props) {
  const [rate, setRate] = React.useState<number | null>(null);
  const [comment, setComment] = React.useState<string>("");
  const [hasVoted, setHasVoted] = React.useState<boolean>(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (rate == null) return;

    const stringified = JSON.stringify({ rate, comment });
    // add to local storage
    localStorage.setItem("rated", stringified);

    fetch("https://tijmevh.nl:3000/rate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringified,
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
          type="text"
          name="comment"
          id="comment"
          placeholder="Comment"
          value={comment}
          onChange={(e) => {
            if (!hasVoted) setComment(e.target.value);
          }}
        />
        <button
          disabled={hasVoted}
          type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
