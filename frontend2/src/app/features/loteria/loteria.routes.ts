import { LoteriaAlterarComponent } from "./pages/loteria-alterar/loteria-alterar.component";
import { LoteriaConsultarComponent } from "./pages/loteria-consultar/loteria-consultar.component";
import { LoteriaCriarComponent } from "./pages/loteria-criar/loteria-criar.component";

export const LOTERIA_ROUTES = [
    {
        path: 'loterias',
        title: 'Loterias',
        component: LoteriaConsultarComponent
    },
    {
        path: 'loterias/new',
        title: 'Nova Loteria',
        component: LoteriaCriarComponent
    },
    {
        path: 'loterias/:id/edit',
        title: 'Alterar Loteria',
        component: LoteriaAlterarComponent
    }
];