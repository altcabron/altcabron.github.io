import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		alias: {
			'@data': 'src/data',
			'@components': 'src/components'
		},
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};