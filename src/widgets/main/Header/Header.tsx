import { observer } from 'mobx-react-lite'
import { appStore } from 'shared/model/appStore'
import { HeaderMobile } from './HeaderMobile'
import { HeaderDeckstop } from './HeaderDeckstop'

export const Header = observer(() => {
	
	return appStore.isMobile ? <HeaderMobile/> : <HeaderDeckstop/>
})