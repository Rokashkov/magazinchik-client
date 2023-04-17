import { observer } from 'mobx-react-lite'
import { IMainProps } from './IMainProps'
import { globalStore } from 'shared/store/globalStore'
import { MainMobile } from './MainMobile'
import { MainDeckstop } from './MainDeckstop'

export const Main = observer(({ children }: IMainProps) => {
	
	return globalStore.isMobile ? <MainMobile>{ children }</MainMobile> : <MainDeckstop>{ children }</MainDeckstop>
})