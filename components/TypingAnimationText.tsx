"use client";

function TypingAnimationText({ text, sx }: { text: string; sx: string }) {
  return (
    <div>
      <style jsx>{`
        // @keyframes cursor {
        //   50% {
        //     border-color: transparent;
        //   }
        // }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .typing-effect {
          display: inline-block;
          overflow: hidden; /* hides the overflowing text */
          white-space: nowrap; /* keeps text in one line */
        //   border-right: 2px solid #000; /* cursor effect */
          animation: typing 10s;
            // cursor 0.6s step-end infinite alternate;
        }
      `}</style>

      <h3 className={`typing-effect ${sx}`}>{text}</h3>
    </div>
  );
}

export default TypingAnimationText;
