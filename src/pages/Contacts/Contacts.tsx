import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import { Contact } from 'components/Contact';

export const Contacts: FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography color={theme.palette.text.primary} variant={'h6'} marginBottom={'10px'}>
        Find me on:
      </Typography>
      <Contact
        title={'GitHub'}
        link={'https://github.com/ViteKhan'}
        icon={<GitHubIcon/>}
        color={'black'}/>
      <Contact
        title={'LinkedIn'}
        link={'https://www.linkedin.com/in/vitekhan'}
        icon={<LinkedInIcon/>}
        color={theme.palette.primary.dark}
      />
      <Contact
        title={'Telegram'}
        link={'https://t.me/w1ktorin'}
        icon={<TelegramIcon/>}
        color={theme.palette.primary.main}
      />
    </Box>
  );
};