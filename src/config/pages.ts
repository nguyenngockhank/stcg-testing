export interface WebPage {
    title: string,
    url: string,
}

export const WEB_PAGES : WebPage[] = [
    { title: 'Home', url: '/' },
    // stcg list
    { title: 'Stcg-Categories', url: '/cat' },
    { title: 'Stcg-Category-Detail', url: '/cat/nhung-cau-noi-hai-huoc-ve-dan-it' },
    { title: 'Stcg-Tags', url: '/tag' },
    { title: 'Stcg-Tag-Detail', url: '/tag/cafe' },
    { title: 'Stcg-Authors', url: '/author' },
    { title: 'Stcg-Author-Detail', url: '/author/tien-si-le-tham-duong' },
    { title: 'Stcg-Latest-Posts', url: '/bai-moi' },
    { title: 'Stcg-Post-Detail', url: '/post/14/minh-yeu-nhau-em-nhe-ta-cung-sinh-em-be-v' },
    // song-ngu
    { title: 'Bilingual-Latest-Posts', url: '/danh-ngon-song-ngu/bai-moi' },
    { title: 'Bilingual-Post-Detail', url: '/danh-ngon-song-ngu/bai-viet/1092/ban-tot-kho-tim-kho-bo-lai-va-khong-the-quen-duoc' },
    // wordplay tools
    { title: 'WpTools', url: '/tu-dien' },
    { title: 'WpTools-Char', url: '/tu-dien/ky-tu-dau/b' },
    { title: 'WpTools-Accent', url: '/tu-dien/thanh-am/ngang' },
]