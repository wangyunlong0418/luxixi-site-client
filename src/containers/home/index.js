import React from 'react';
import { observer, inject } from 'mobx-react';

import './index.less'

@inject('homeStore')
@observer
export default class Home extends React.Component {
	render() {
		return (
			<div className="box">
				<span className="title">我也不知道写点啥，先放个Hello world吧</span>
				<span><a href="https://github.com/wangyunlong0418">github</a></span>
			</div>
		)
	}
}
