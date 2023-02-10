import React, { useEffect } from "react";

type Props = {};

export default function Introduction({}: Props) {
  const title = "Tijme";
  const description = "Frontend Developer";

  const header = React.useRef<HTMLHeadingElement>(null);
  const paragraph = React.useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timePerLetter = "200ms";
    header.current?.style.setProperty("--length", title.length + "");
    header.current?.style.setProperty("--delay", "500ms");
    // h2.current?.style.setProperty("--length", h2Value.length + "");
    // h2.current?.style.setProperty("--time-per-letter", timePerLetter);
    header.current?.style.setProperty("--time-per-letter", timePerLetter);

    const h2Spans =
      paragraph.current?.querySelectorAll("span") ||
      ([] as unknown as NodeListOf<HTMLSpanElement>);

    for (const span of h2Spans) {
      span.style.setProperty("--time-per-letter", timePerLetter);
      span.style.setProperty("--length", span.textContent?.length + "");
      span.style.setProperty("--delay", "100ms");
    }

    function getSpansBeforeThis(index: number) {
      const spansBeforeThis = Array.from(h2Spans).slice(0, index);
      return spansBeforeThis;
    }

    function getTimeTaken(index: number) {
      const spansBeforeThis = getSpansBeforeThis(index);
      const timeTaken = spansBeforeThis.reduce((acc, span) => {
        return (
          acc +
          +(span.style.getPropertyValue("--length") || 0) *
            +(
              span.style
                .getPropertyValue("--time-per-letter")
                .replace(/[A-z]/g, "") || 0
            ) +
          +(span.style.getPropertyValue("--delay").replace(/[A-z]/g, "") || 0)
        );
      }, 0);
      return index === 0 ? 0 : timeTaken;
    }

    if (
      !Array.from(h2Spans).some(
        (span) =>
          span.classList.contains("animate") ||
          span.classList.contains("animated")
      )
    )
      setTimeout(() => {
        header.current?.classList.remove("animate");
        header.current?.classList.add("animated");
        for (const index in Array.from(h2Spans)) {
          setTimeout(() => {
            for (const span of getSpansBeforeThis(+index)) {
              span.classList.add("animated");
              span.classList.remove("animate");
            }

            const span = h2Spans[index];
            span.classList.add("animate");

            const STOP_BLINKING = false as const;
            if (+index === h2Spans.length - 1 && STOP_BLINKING) {
              setTimeout(() => {
                for (const span of h2Spans) {
                  span.classList.add("animated");
                  span.classList.remove("animate");
                }
              }, getTimeTaken(+index + 1));
            }
          }, getTimeTaken(+index));
        }
      }, +(header.current?.style.getPropertyValue("--delay").replace(/[A-z]/g, "") || 100) + +(header.current?.style.getPropertyValue("--length") || 5) * +(header.current?.style.getPropertyValue("--time-per-letter").replace(/[A-z]/g, "") || 100));
  }, []);

  return (
    <section className="introduction">
      <h1
        className="animate"
        ref={header}>
        {title}
      </h1>
      <p ref={paragraph}>
        {description.split(" ").map((v, i) =>
          v == "\n" ? (
            <br />
          ) : (
            <span>
              {v +
                // add space if not last word
                (v == description.split(" ").slice(-1)[0] ||
                description.split(" ")?.[i + 1] == "\n"
                  ? ""
                  : " ")}
            </span>
          )
        )}
      </p>
    </section>
  );
}
