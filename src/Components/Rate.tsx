import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
type Props = {};

export default function Rate({}: Props) {
  const [rate, setRate] = React.useState<number | null>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (rate == null) return;

    fetch("http://tijmevh.nl:3000/rate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rate }),
    });
  };

  return (
    <section className="rate">
      <h2>Rate</h2>
      <p>Please rate this website</p>
      <form onSubmit={submit}>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((number) => (
            <label key={number}>
              <input
                onClick={() => setRate(number)}
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
