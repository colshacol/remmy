import Ink, { h, Text } from "ink";

import "./setup/types";

import { options } from './setup/options';
import { config } from "./setup/config";

import { Provider } from '@features/Provider';
import { App } from './App';

Ink.render(
	<Provider config={config} options={options}>
		<App />
	</Provider>
);
