import { FC } from 'react';

import { Box, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const GithubLink: FC = () => {
  return (
    <Link
      href={'https://github.com/ViteKhan'}
      target={'_blank'}
      rel={'noopener'}
      sx={{ textDecoration: 'none' }}
    >
      <Box sx={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
        <GitHubIcon/>
        <Typography>ViteKhan</Typography>
      </Box>
    </Link>
  );
};