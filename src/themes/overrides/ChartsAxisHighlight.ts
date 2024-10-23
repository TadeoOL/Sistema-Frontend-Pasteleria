import { Theme } from '@mui/material';

// ==============================|| OVERRIDES - CHART AXIS HIGHLIGHT ||============================== //

export default function ChartsAxiasHighlight(theme: Theme) {
  return {
    MuiChartsAxisHighlight: {
      styleOverrides: {
        root: {
          stroke: theme.palette.secondary.light
        }
      }
    }
  };
}
