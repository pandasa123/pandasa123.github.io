import React from 'react'

const NotFound: React.FunctionComponent = () => {
	if (typeof window !== 'undefined') {
		window.location.href = '/'
	}
	return null
}

export default NotFound
