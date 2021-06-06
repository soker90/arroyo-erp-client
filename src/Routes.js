/* eslint-disable react/no-array-index-key */
import { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import DashboardLayout from 'layouts/DashboardLayout';
import LoadingScreen from 'components/LoadingScreen';
import AuthGuard from 'components/AuthGuard';
import GuestGuard from 'components/GuestGuard';
import NotFound from 'components/NotFound';

const year = new Date().getFullYear();

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to='/login' />,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('pages/Login')),
  },
  {
    path: '/app',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/app',
        component: () => <Redirect to='/app/informes/inicio' />,
      },
      {
        path: '/app/informes',
        routes: [
          {
            exact: true,
            path: '/app/informes/inicio',
            component: lazy(() => import('pages/Dashboard')),
          },
          {
            exact: true,
            path: '/app/informes',
            component: () => <Redirect to='/app/informes/inicio' />,
          },
          {
            exact: true,
            path: '/app/informes/productos',
            component: lazy(() => import('pages/reports/ProductsReport')),
          },
          {
            exact: true,
            path: '/app/informes/facturacion/:year',
            component: lazy(() => import('pages/reports/Billing')),
          },
          {
            exact: true,
            path: '/app/informes/facturacion',
            component: () => <Redirect to={`/app/informes/facturacion/${year}`} />,
          },
          {
            exact: true,
            path: '/app/informes/albaranes/:year',
            component: lazy(() => import('pages/reports/DeliveryOrders')),
          },
          {
            exact: true,
            path: '/app/informes/albaranes',
            component: () => <Redirect to={`/app/informes/albaranes/${year}`} />,
          },
          {
            exact: true,
            path: '/app/informes/pagos/:year',
            component: lazy(() => import('pages/reports/PaymentsReport')),
          },
        ],
      },
      {
        exact: true,
        path: '/app/proveedores',
        component: lazy(() => import('pages/Providers/Providers')),
      },
      {
        exact: true,
        path: '/app/proveedores/:idProvider',
        component: lazy(() => import('pages/Providers/Provider')),
      },
      {
        exact: true,
        path: '/app/albaranes/:idDeliveryOrder',
        component: lazy(() => import('pages/DeliveryOrder')),
      },
      {
        exact: true,
        path: '/app/facturas/:idInvoice',
        component: lazy(() => import('pages/Invoice')),
      },
      {
        exact: true,
        path: '/app/productos/:id',
        component: lazy(() => import('pages/Product')),
      },
      {
        exact: true,
        path: '/app/libro/:year',
        component: lazy(() => import('pages/Book')),
      },
      {
        exact: true,
        path: '/app/pagos',
        component: lazy(() => import('pages/Payments')),
      },
      {
        exact: true,
        path: '/app/notas/:year',
        component: lazy(() => import('pages/Notes')),
      },
      {
        exact: true,
        path: '/app/notas',
        component: () => <Redirect to={`/app/notas/${year}`} />,
      },
      {
        exact: true,
        path: '/app/gastos/:idProvider',
        component: lazy(() => import('pages/Providers/ProviderExpense')),
      },
      {
        exact: true,
        path: '/app/gastos',
        component: lazy(() => import('pages/Expenses')),
      },
      {
        exact: true,
        path: '/app/proveedores/general/:idProvider',
        component: lazy(() => import('pages/Providers/ProviderGeneral')),
      },
      {
        exact: true,
        path: '/app/intercambio',
        component: lazy(() => import('pages/SwapInvoices')),
      },
      {
        exact: true,
        path: '/app/precios',
        component: lazy(() => import('pages/PriceChanges')),
      },
      {
        path: '/app/clientes',
        routes: [
          {
            exact: true,
            path: '/app/clientes',
            component: () => <Redirect to='/app/clientes/listado' />,
          },
          {
            exact: true,
            path: '/app/clientes/listado',
            component: lazy(() => import('pages/Clients')),
          },
          {
            exact: true,
            path: '/app/clientes/productos',
            component: lazy(() => import('pages/Products')),
          },
          {
            exact: true,
            path: '/app/clientes/factura/:idInvoice',
            component: lazy(() => import('pages/ClientInvoice')),
          },
          {
            exact: true,
            path: '/app/clientes/libro/:year',
            component: lazy(() => import('pages/ClientBook')),
          },
          {
            exact: true,
            path: '/app/clientes/:id',
            component: lazy(() => import('pages/Client')),
          },
        ],
      },
      {
        component: () => <NotFound />,
      },
    ],
  },
];

const renderRoutes = routes => (routes ? (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={props => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
) : null);

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
