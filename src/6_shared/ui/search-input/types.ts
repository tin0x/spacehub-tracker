import type { ComponentPropsWithoutRef } from 'react';

export type SearchInputProps = {
  placeholder?: string;
} & ComponentPropsWithoutRef<'input'>;
