import { ArticleStateType } from "src/constants/articleProps";

type Action = {
	type: 'setArticleState';
	payload: ArticleStateType;
};


export const articleStateReducer = (state: ArticleStateType, action: Action) => {
	switch (action.type) {
		case 'setArticleState':
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}