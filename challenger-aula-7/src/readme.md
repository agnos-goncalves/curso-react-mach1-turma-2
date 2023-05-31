### ETAPA 1

Configurar react router com browser no main.jsx
<BrowserRouter> // Provider
###ETAPA 2
criar arquivo ROTAS
ROUTER.jsx configurar as rotas
<Routes> // Provider Component
<Route path="artigos" element={<ArtigoLista />} /> // rota estatica
<Route path="artigos/:id" element={<Artigo />} /> // dinamico
<Route path="\*" element={<NotFound />} /> // se n acha rota cai aqui
</Routes>

###ETAPA 3 Carrgar component Router em APP.jsx
<Router /> // Provider

Utilitarios

Consumir parametro dinamico artigos/:id
useParams() = id

Consumir dados da rota
useLocation

Navegar entra rotas dentro do jsx
<NavLink to="rota/"> <a href="/rota">

<Link to="rota/">

Navegar como funcao
const navigate = useNavigate();
navigate("rota/");
