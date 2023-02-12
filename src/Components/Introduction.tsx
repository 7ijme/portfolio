import React, { useEffect } from "react";

type Props = {};

export default function Introduction({}: Props) {
  const title = "Tijme";
  const description = "Frontend Developer";
  const headerDelay = "500ms" as const;
  const descriptionDelay = "10ms" as const;
  const timePerLetter = "180ms" as const;

  const [headerClass, setHeaderClass] = React.useState("animate");
  const [paragraphClasses, setParagraphClasses] = React.useState<string[]>(
    new Array(description.split(" ").length).fill("")
  );

  useEffect(() => {
    function getIndexesBeforeThis(index: number) {
      // get the indexes of all spans before this one
      const spansBeforeThis = [];
      for (let i = 0; i < index; i++) {
        spansBeforeThis.push(i);
      }

      return spansBeforeThis as number[];
    }

    function getTimeTaken(index: number) {
      const spansBeforeThis = getIndexesBeforeThis(index);
      const timeTaken = spansBeforeThis.reduce((acc, span) => {
        return (
          acc +
          +description.split(" ")[span].length *
            +timePerLetter.replace(/[A-z]/g, "") +
          +descriptionDelay.replace(/[A-z]/g, "")
        );
      }, 0);
      return index === 0 ? 0 : timeTaken;
    }

    if (!paragraphClasses.some((v) => v === "animate" || v === "animated"))
      setTimeout(() => {
        setHeaderClass("animated");
        for (const index in paragraphClasses) {
          setTimeout(() => {
            const spansBeforeThis = getIndexesBeforeThis(+index);

            setParagraphClasses((prev) => {
              const newParagraphClasses = [...prev];
              // set class of all spans before this to animated
              spansBeforeThis.forEach((i) => {
                newParagraphClasses[+i] = "animated";
              });

              // set class of this span to animate
              newParagraphClasses[+index] = "animate";
              return newParagraphClasses;
            });

            const STOP_BLINKING = false as const;
            if (+index === paragraphClasses.length - 1 && STOP_BLINKING) {
              setTimeout(() => {
                setParagraphClasses(() => {
                  const newParagraphClasses = new Array(
                    description.split(" ").length
                  ).fill("animated");
                  return newParagraphClasses;
                });
              }, getTimeTaken(+index + 1));
            }
          }, getTimeTaken(+index));
        }
      }, +(headerDelay.replace(/[A-z]/g, "") || 100) + title.length * +(timePerLetter.replace(/[A-z]/g, "") || 100));
  }, []);

  return (
    <section className="introduction">
      <h1
        style={
          {
            "--length": title.length,
            "--time-per-letter": timePerLetter,
            "--delay": headerDelay,
          } as React.CSSProperties
        }
        className={headerClass}>
        {title}
      </h1>
      <p>
        {description.split(" ").map((v, i) =>
          v == "\n" ? (
            <div className="break" />
          ) : (
            <span
              className={paragraphClasses[i]}
              style={
                {
                  "--length":
                    v.length +
                    (description.split(" ").length - 1 == i ||
                    description.split(" ")[i + 1] == "\n"
                      ? 0
                      : 1),
                  "--delay": descriptionDelay,
                  "--time-per-letter": timePerLetter,
                } as React.CSSProperties
              }>
              {v}
              {description.split(" ").length - 1 == i ||
              description.split(" ")[i + 1] == "\n"
                ? ""
                : "\u00A0"}
            </span>
          )
        )}
      </p>
    </section>
  );
}
