import { observer } from 'mobx-react-lite'
import { globalStore } from 'shared/store/globalStore'
import { FooterMobile } from './FooterMobile'
import { FooterDeckstop } from './FooterDeckstop'

export const Footer = observer(() => {
	
	return globalStore.isMobile ? <FooterMobile/> : <FooterDeckstop/>
})