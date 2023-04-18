import { observer } from 'mobx-react-lite'
import { appStore } from 'shared/model/appStore'
import { FooterMobile } from './FooterMobile'
import { FooterDeckstop } from './FooterDeckstop'

export const Footer = observer(() => {
	
	return appStore.isMobile ? <FooterMobile/> : <FooterDeckstop/>
})