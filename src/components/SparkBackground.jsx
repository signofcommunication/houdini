import { useEffect, useState } from "react";

const SparkBackground = () => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Periksa dukungan Houdini
    if ("paintWorklet" in CSS) {
      try {
        // Registrasi paint worklet
        CSS.paintWorklet.addModule(
          URL.createObjectURL(
            new Blob(
              [
                `
              class RandomSparksPainter {
                paint(ctx, geom) {
                  const width = geom.width;
                  const height = geom.height;

                  for (let i = 0; i < 50; i++) {
                    ctx.beginPath();
                    ctx.fillStyle = \`hsl(\${Math.random() * 360}, 50%, 50%)\`;
                    ctx.arc(
                      Math.random() * width,
                      Math.random() * height,
                      Math.random() * 5,
                      0, 
                      Math.PI * 2
                    );
                    ctx.fill();
                  }
                }
              }

              registerPaint('random-sparks', RandomSparksPainter);
            `,
              ],
              { type: "application/javascript" }
            )
          )
        );
        setIsSupported(true);
      } catch (error) {
        console.error("Houdini Paint tidak didukung:", error);
      }
    }
  }, []);

  if (!isSupported) {
    return <div>Browser Anda tidak mendukung Houdini Paint</div>;
  }

  return (
    <div
      style={{
        background: "paint(random-sparks)",
        width: "300px",
        height: "200px",
        border: "1px solid black",
      }}
    >
      Sparkly Background
    </div>
  );
};

export default SparkBackground;
