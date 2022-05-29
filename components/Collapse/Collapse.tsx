import { useEffect, useRef, useState } from "react";

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

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface CollapseProps {
  title: string;
  disabled?: boolean;
  header: string | JSX.Element;
  children: any;
  open: boolean;
}

const Collapse = ({ disabled, header, children, open }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(0);

  const rotateIcon = `rotate(${isOpen ? "-90" : "90"}deg)`;

  const toggleCollapse = () => {
    setIsOpen((prev: any) => !prev);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <CollapseContainer isOpen={isOpen} disabled={disabled}>
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
interface CollapseComponentsProps {
  className?: string;
  children: any;
}

const Body = ({ children, className }: CollapseComponentsProps) => {
  return <CollapseBody className={className}>{children}</CollapseBody>;
};
Collapse.Body = Body;

const Footer = ({ children, className }: CollapseComponentsProps) => {
  return <CollapseFooter className={className}>{children}</CollapseFooter>;
};
Collapse.Footer = Footer;

const Label = ({ className, children }: CollapseComponentsProps) => {
  return <SectionLabel className={className}>{children}</SectionLabel>;
};
Collapse.Label = Label;

const Item = ({ children, className }: CollapseComponentsProps) => {
  return <SectionItem className={className}>{children}</SectionItem>;
};
Collapse.Item = Item;

const Section = ({ children, className }: CollapseComponentsProps) => {
  return <CollapseSection className={className}>{children}</CollapseSection>;
};
Collapse.Section = Section;

export default Collapse;
