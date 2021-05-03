import React from 'react';
import * as styled from './styled';

export type FormProps = {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({
  onSubmit,
  children
}: FormProps) => {
  return (
    <styled.Container>
      <styled.form onSubmit={onSubmit}>{children}</styled.form>
    </styled.Container>
  );
};
