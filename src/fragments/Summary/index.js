import React, { useState, useCallback, useRef } from 'react';
import { Content, OpenSummaryButton } from './style';

const Summary = ({ color }) => {
  const [summaryOpen, setSummaryOpen] = useState(false);
  const summaryRef = useRef(null);

  const handleClick = useCallback(() => {
    setSummaryOpen(!summaryOpen);
  }, [summaryOpen]);

  return (
    <>
      <Content className={summaryOpen ? 'open' : 'closed'} ref={summaryRef}>
        <h2>Test</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nostrum sint a quae
          officiis dolorum ipsam vitae voluptatibus quia, maiores facilis reprehenderit consectetur
          repellendus tenetur possimus perspiciatis. Temporibus, et error.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nostrum sint a quae
          officiis dolorum ipsam vitae voluptatibus quia, maiores facilis reprehenderit consectetur
          repellendus tenetur possimus perspiciatis. Temporibus, et error.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dolor suscipit maxime
          eaque eveniet quae magni perferendis praesentium delectus vero saepe, quaerat repudiandae.
          Quibusdam corporis natus, ratione recusandae earum debitis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint modi nostrum possimus
          deserunt, voluptates neque obcaecati adipisci eaque sequi magni sapiente corrupti minima
          dolores ex eos id animi omnis velit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione, nam rerum
          dolore repellendus eligendi exercitationem mollitia cum perferendis possimus assumenda
          ipsum voluptates debitis quas itaque dignissimos nemo incidunt distinctio.
        </p>
      </Content>
      <OpenSummaryButton color={color} onClick={handleClick}>
        {summaryOpen ? 'Close' : 'Open'} Summary
      </OpenSummaryButton>
    </>
  );
};

export default Summary;
