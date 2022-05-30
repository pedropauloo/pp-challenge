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
  SectionBadge,
  HeaderContent,
  CollapseBody,
} from "./styles";

const Collapse = ({ header, children, open }: any) => {
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
    <CollapseContainer open={isOpen}>
      <CollapseHeader>
        <HeaderContent>{header}</HeaderContent>
        <CollapseButton type="button" onClick={toggleCollapse}>
          <ChevronRightIcon
            style={{ transform: rotateIcon, fontWeight: "light" }}
            fontSize="large"
          />
        </CollapseButton>
      </CollapseHeader>
      <CollapseContent style={{ height }}>
        <div ref={ref}>{isOpen && <CollapseBody>{children}</CollapseBody>}</div>
      </CollapseContent>
    </CollapseContainer>
  );
};

const Footer = ({ children }: any) => {
  return <CollapseFooter>{children}</CollapseFooter>;
};
Collapse.Footer = Footer;

const Badge = ({ children }: any) => {
  return <SectionBadge>{children}</SectionBadge>;
};
Collapse.Badge = Badge;

const Label = ({ children }: any) => {
  return <SectionLabel>{children}</SectionLabel>;
};
Collapse.Label = Label;

const Item = ({ children }: any) => {
  return <SectionItem>{children}</SectionItem>;
};
Collapse.Item = Item;

const Section = ({ children }: any) => {
  return <CollapseSection>{children}</CollapseSection>;
};
Collapse.Section = Section;

export default Collapse;
