import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 800, desktop: 1124 };

export const useBreakPoint = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'mobile');
  const mobile = breakpoint === 'mobile';
  const tablet = breakpoint === 'tablet';
  const desktop = breakpoint === 'desktop';
  return { mobile, tablet, desktop };
};
