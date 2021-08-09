import Home from './../components/Home';
import FormatJson from './../components/FormatJson';
import CryptoMd5 from './../components/CryptoMd5';
import CryptoSHA from './../components/CryptoSHA';

export default [
    { path: '/', component: Home, name: 'Home' },
    { path: '/FormatJson', component: FormatJson, name: 'FormatJson', },
    { path: '/CryptoMd5', component: CryptoMd5, name: 'CryptoMd5', },
    { path: '/CryptoSHA', component: CryptoSHA, name: 'CryptoSHA', },
]