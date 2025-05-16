import { LoteriaAlterarComponent } from "./pages/loteria-alterar/loteria-alterar.component";
import { LoteriaConsultarComponent } from "./pages/loteria-consultar/loteria-consultar.component";
import { LoteriaCriarComponent } from "./pages/loteria-criar/loteria-criar.component";

export const LOTERIA_ROUTES = [
    {
        path: 'loterias',
        component: LoteriaConsultarComponent
    },
    {
        path: 'loterias/new',
        component: LoteriaCriarComponent
    },
    {
        path: 'loterias/:id/edit',
        component: LoteriaAlterarComponent
    }
];