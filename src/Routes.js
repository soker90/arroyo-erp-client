/* eslint-disable react/no-array-index-key */
import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import DashboardLayout from 'layouts/DashboardLayout';
import LoadingScreen from 'components/LoadingScreen';
import AuthGuard from 'components/AuthGuard';
import GuestGuard from 'components/GuestGuard';
import NotFound from 'components/NotFound';

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
        path: '/app/notas',
        component: lazy(() => import('pages/Notes')),
      },
      {
        exact: true,
        path: '/app/gastos',
        component: lazy(() => import('pages/Expenses/Expenses')),
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
