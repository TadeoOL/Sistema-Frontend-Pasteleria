import { AppBar, Box, Container, useScrollTrigger, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';
import Navigation from '../Navigation/NavListItem';
import { mockNavigationItems } from '../../mock/mockNavigation';

// project imports

// ==============================|| HORIZONTAL MENU LIST ||============================== //

interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
  const theme = useTheme();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!
  });

  theme.shadows[4] = theme.customShadows.z1;

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

// ==============================|| HORIZONTAL MENU LIST ||============================== //

export default function CustomAppBar() {
  return (
    <ElevationScroll>
      <AppBar
        sx={{
          top: 60,
          bgcolor: 'background.paper',
          width: '100%',
          height: 62,
          justifyContent: 'center',
          borderTop: '1px solid',
          borderTopColor: 'divider',
          borderBottom: '1px solid',
          borderBottomColor: 'divider',
          zIndex: 1098,
          color: 'grey.500'
        }}
      >
        <Container maxWidth={'xl'}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Navigation items={mockNavigationItems} />
          </Box>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
