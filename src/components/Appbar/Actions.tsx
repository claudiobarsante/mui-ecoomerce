import {
  Badge,
  Divider,
  ListItemButton,
  ListItemIcon,
  Tooltip
} from '@mui/material';
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  TopMenu
} from './styles';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// -- Styles
import { Colors } from 'styles/theme/colors';
// -- types
import { AppbarProps } from './types';

export default function Actions({ isMobile }: AppbarProps) {
  const ComponentContainer = isMobile
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <ComponentContainer>
      <TopMenu type="row">
        <ListItemButton
          sx={{
            justifyContent: 'center'
          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: isMobile ? Colors.secondary : ''
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: 'center'
          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: isMobile ? Colors.secondary : ''
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: 'center'
          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: isMobile ? Colors.secondary : ''
            }}
          >
            <Tooltip title="Account settings">
              <Badge color="primary" variant="dot" aria-label="User logged in">
                <PersonIcon />
              </Badge>
            </Tooltip>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </TopMenu>
    </ComponentContainer>
  );
}
