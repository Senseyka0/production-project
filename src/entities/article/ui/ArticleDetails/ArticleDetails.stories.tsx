import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IArticle, BlockType } from "entities/article";
import { StoreDecorator } from "shared/config/storybook";

import { ArticleDetails } from "./ArticleDetails";

export default {
	title: "entities/ArticleDetails",
	component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => {
	return <ArticleDetails {...args} />;
};

const article: IArticle = {
	id: 1,
	title: "Javascript news",
	subtitle: "Что нового в JS за 2022 год?",
	img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
	views: 1022,
	createdAt: "26.02.2022",
	type: ["IT"],
	blocks: [
		{
			id: 1,
			type: BlockType.TEXT,
			title: "Заголовок этого блока",
			paragraphs: [
				"Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
				"JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
				"Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
			],
		},
		{
			id: 4,
			type: BlockType.CODE,
			code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=></p>\n\n    <script>\n      document.getElementById(hello).innerHTML = 'Hello, world!';\n    </script>\n  </body>\n</html>;",
		},
		{
			id: 5,
			type: BlockType.TEXT,
			title: "Заголовок этого блока",
			paragraphs: [
				"Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
				"Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
			],
		},
		{
			id: 2,
			type: BlockType.IMAGE,
			src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
			title: "Рисунок 1 - скриншот сайта",
		},
		{
			id: 3,
			type: BlockType.CODE,
			code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
		},
		{
			id: 7,
			type: BlockType.TEXT,
			title: "Заголовок этого блока",
			paragraphs: [
				"JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
				"Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
			],
		},
		{
			id: 8,
			type: BlockType.IMAGE,
			src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
			title: "Рисунок 1 - скриншот сайта",
		},
		{
			id: 9,
			type: BlockType.TEXT,
			title: "Заголовок этого блока",
			paragraphs: [
				"JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
			],
		},
	],
};

export const Standard = Template.bind({});
Standard.args = {
	id: "1",
};

Standard.decorators = [
	StoreDecorator({
		articleDetails: {
			data: article,
		},
	}),
];

export const Error = Template.bind({});
Error.args = {
	id: "1",
};

Error.decorators = [
	StoreDecorator({
		articleDetails: {
			error: "Error state",
		},
	}),
];

export const Loading = Template.bind({});
Loading.args = {
	id: "1",
};

Loading.decorators = [
	StoreDecorator({
		articleDetails: {
			isLoading: true,
		},
	}),
];
