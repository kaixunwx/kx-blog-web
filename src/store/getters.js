const getters = {
    user: state => state.aside.user,
    recentPublish: state => state.aside.recentPublish,
    asideTags: state => state.aside.tags,
    blogAmount: state => state.aside.blogAmount,
    commentAmount: state => state.aside.commentAmount,
    defaultThumbnail: state => state.settings.defaultThumbnail,
    footerTxt: state => state.settings.footerTxt,
    caseNumber: state => state.settings.caseNumber,
}

export default getters
