import React, { HTMLProps } from 'react';
export type Props = HTMLProps<HTMLAnchorElement> & {
    active?: boolean;
};
export default function PageLink({ active, disabled, children, ...otherProps }: Props): React.JSX.Element;
