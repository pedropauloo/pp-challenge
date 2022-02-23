import { useEffect, useRef, useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  CollapseButton,
  CollapseContainer,
  CollapseHeader,
  CollapseInfo,
  CollpaseContent,
} from "./styles";

const Collapse = ({ title, subTitle, children, open }: any) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(0);
  const rotateIcon = `rotate(${isOpen ? "-90" : "90"}deg)`;


  const showCollapseContent = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <>
      <CollapseContainer open={isOpen}>
        <CollapseHeader>
          <CollapseInfo>
            <h6>{title}</h6>
            <h6>{subTitle}</h6>
          </CollapseInfo>
          <CollapseButton type="button" onClick={showCollapseContent}>
            <ChevronRightIcon
              style={{ transform: rotateIcon }}
              fontSize="large"
            />
          </CollapseButton>
        </CollapseHeader>

        <CollpaseContent style={{ height }}>
          <div ref={ref}>
            <div>{isOpen && <div>{children}</div>}</div>
          </div>
        </CollpaseContent>
      </CollapseContainer>
    </>
  );
};

export default Collapse;
