import React, { memo } from 'react';
import { StyledSpiner } from './StyledSpinner';
import reactLogo from 'assets/img/logo.svg';

const Spinner = () => <StyledSpiner src={reactLogo} />;

export default memo(Spinner);
