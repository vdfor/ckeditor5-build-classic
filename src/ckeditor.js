/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

// custom by vdfor
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import LineHeight from 'ckeditor5-line-height';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import TextColor from 'ckeditor-text-color-select/src/textcolor';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	// custom by vdfor
	Underline,
	Strikethrough,
	FontSize,
	TextColor,
	LineHeight,
	Alignment
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		// custom by vdfor
		items: [
			'undo',
			'redo',
			'|',
			'heading',
			'fontSize',
			'lineHeight',
			'textcolor',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'alignment',
			'link',
			'bulletedList',
			'numberedList',
			'imageUpload'
		]
		// items: [
		// 	'heading',
		// 	'|',
		// 	'bold',
		// 	'italic',
		// 	'link',
		// 	'bulletedList',
		// 	'numberedList',
		// 	'imageUpload',
		// 	'blockQuote',
		// 	'insertTable',
		// 	'mediaEmbed',
		// 	'undo',
		// 	'redo'
		// ]
	},
	fontSize: {
		options: ['default', 12, 14, 16, 18, 20, 22, 24, 32]
	},
	lineHeight: { // custom by vdfor
		options: ['default', 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5]
	},
	image: {
		toolbar: ['imageStyle:full', 'imageStyle:alignLeft', 'imageStyle:alignRight'], // custom by vdfor
		styles: ['full', 'alignLeft', 'alignRight'] // custom by vdfor
		// styles: ['full']
		// toolbar: [
		// 	'imageStyle:full',
		// 	'imageStyle:side',
		// 	'|',
		// 	'imageTextAlternative'
		// ]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'zh-cn' // custom by vdfor
	// language: 'en'
};
