import React, { useEffect, useRef } from "react";
import "./MatrixRain.css";

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dpr = window.devicePixelRatio;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const headlineText = "WELCOME TO MY PORTFOLIO";
    const binaryFontSize = 10;
    const flowSpeed = 0.4;
    let rows: string[] = [];
    let yOffset = 0;
    let textBlockHeight = 0;
    let charWidth = 0;

    const setCanvasSize = () => {
      const computedStyle = window.getComputedStyle(container);
      const fontSize = Number(computedStyle.fontSize.replace("px", ""));
      const fontFamily = computedStyle.fontFamily;
      const fontWeight = computedStyle.fontWeight;

      // Create temporary canvas to measure text precisely
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return;

      tempCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      const metrics = tempCtx.measureText(headlineText);
      const actualWidth = metrics.width;
      const actualTextHeight =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent || fontSize;

      const finalWidth = actualWidth > 0 ? actualWidth + 10 : 800;
      const finalHeight = actualTextHeight > 0 ? actualTextHeight + 20 : 120;

      // Set canvas dimensions with DPI scaling
      canvas.width = finalWidth * dpr;
      canvas.height = finalHeight * dpr;
      canvas.style.width = `${finalWidth}px`;
      canvas.style.height = `${finalHeight}px`;

      // Scale context for HiDPI
      ctx.scale(dpr, dpr);

      // Generate binary rows
      ctx.font = `${binaryFontSize}px "Source Code Pro", monospace`;
      charWidth = ctx.measureText("0").width / dpr;

      const columns = Math.ceil(finalWidth / charWidth) + 2;
      const numRows = Math.ceil(finalHeight / binaryFontSize) + 1;

      rows = [];
      for (let i = 0; i < numRows; i++) {
        const rowText = Array(columns)
          .fill(0)
          .map(() => (Math.random() < 0.5 ? "0" : "1"))
          .join("");
        rows.push(rowText);
      }

      textBlockHeight = numRows * binaryFontSize * 1;
      yOffset = 0;
    };

    const animate = () => {
      const cssWidth = Number(canvas.style.width.replace("px", "")) || canvas.width;
      const cssHeight = Number(canvas.style.height.replace("px", "")) || canvas.height;

      // Draw semi-transparent overlay for fade trail
      ctx.fillStyle = "rgba(10, 10, 10, 0.5)";
      ctx.fillRect(0, 0, cssWidth, cssHeight);

      yOffset += flowSpeed;
      if (yOffset > textBlockHeight) {
        yOffset -= textBlockHeight;
      }

      // Draw binary pattern
      ctx.font = `${binaryFontSize}px "Source Code Pro", monospace`;
      ctx.fillStyle = "#00d000";
      const xOffset = 0;
      const lineHeight = binaryFontSize * 0.85; // Reduced row height

      for (let i = 0; i < rows.length; i++) {
        const rowText = rows[i];
        const yPos = i * lineHeight + yOffset;
        ctx.fillText(rowText, xOffset, yPos);
        ctx.fillText(rowText, xOffset, yPos - textBlockHeight * 0.85);
      }

      // Mask binary pattern to text shape using destination-in
      ctx.globalCompositeOperation = "destination-in";

      const headlineStyle = window.getComputedStyle(container);
      const headlineFont = `${headlineStyle.fontWeight} ${headlineStyle.fontSize} "Source Code Pro", monospace`;
      ctx.font = headlineFont;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";

      const xPos = 0;
      const yPos = 0;

      // Fill text to create the mask
      ctx.fillStyle = "#000";
      ctx.fillText(headlineText, xPos, yPos);

      // Switch back to normal composite mode
      ctx.globalCompositeOperation = "source-over";

      // Add barely visible stroke around the letters
      ctx.strokeStyle = "rgba(0, 208, 0, 0.15)";
      ctx.lineWidth = 0.5;
      ctx.strokeText(headlineText, xPos, yPos);

      requestAnimationFrame(animate);
    };

    setCanvasSize();

    // Re-measure once fonts are definitely loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setCanvasSize();
      });
    }

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="matrix-rain-container">
      <canvas ref={canvasRef} className="matrix-rain-canvas" />
    </div>
  );
};

export default MatrixRain;
