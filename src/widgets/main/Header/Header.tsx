import { observer } from 'mobx-react-lite'
import { globalStore } from 'shared/store/globalStore'
import { HeaderMobile } from './HeaderMobile'
import { HeaderDeckstop } from './HeaderDeckstop'

export const Header = observer(() => {
	
	return globalStore.isMobile ? <HeaderMobile/> : <HeaderDeckstop/>
})