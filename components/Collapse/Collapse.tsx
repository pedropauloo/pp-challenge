import { useEffect, useRef, useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  CollapseButton,
  CollapseContainer,
  CollapseHeader,
  CollapseFooter,
  CollapseContent,
  CollapseSection,
  SectionLabel,
  SectionItem,
  HeaderContent,
  CollapseBody,
} from "./styles";

const Collapse = ({ disabled, header, children, open }: any) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(0);

  const rotateIcon = `rotate(${isOpen ? "-90" : "90"}deg)`;

  const toggleCollapse = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <CollapseContainer open={isOpen} disabled={disabled}>
      <CollapseHeader>
        <HeaderContent>{header}</HeaderContent>
        <CollapseButton type="button" onClick={toggleCollapse}>
          <ChevronRightIcon
            style={{ transform: rotateIcon }}
            fontSize="large"
          />
        </CollapseButton>
      </CollapseHeader>

      <CollapseContent style={{ height }}>
        <div ref={ref}>{isOpen && children}</div>
      </CollapseContent>
    </CollapseContainer>
  );
};

const Body = ({ children, className }: any) => {
  return <CollapseBody className={className}>{children}</CollapseBody>;
};
Collapse.Body = Body;

const Footer = ({ children, className }: any) => {
  return <CollapseFooter className={className}>{children}</CollapseFooter>;
};
Collapse.Footer = Footer;

const Label = ({ className, children }: any) => {
  return <SectionLabel className={className}>{children}</SectionLabel>;
};
Collapse.Label = Label;

const Item = ({ children, className }: any) => {
  return <SectionItem className={className}>{children}</SectionItem>;
};
Collapse.Item = Item;

const Section = ({ children, className }: any) => {
  return <CollapseSection className={className}>{children}</CollapseSection>;
};
Collapse.Section = Section;

export default Collapse;
