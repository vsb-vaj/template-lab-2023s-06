import { useState } from "react";

export default function WindowSizer() {
  const [width, setWidth] = useState(window.width);
  const [height, setHeight] = useState(window.height);

  // TODO: write an useEffect hook that will update the width and height every time the window resizes

  return (
    <div>
      <div>
        Window size is {width}x{height}
      </div>
    </div>
  );
}
