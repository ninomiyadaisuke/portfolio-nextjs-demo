import { FC } from 'react';
import Link from 'next/link';

type Props = {
  label: string;
  path: string;
  className?: string;
};

const Menu: FC<Props> = (props) => {
  const { label, path, className } = props;

  return (
    <Link href={path}>
      <a className={className}>{label}</a>
    </Link>
  );
};

export default Menu;
