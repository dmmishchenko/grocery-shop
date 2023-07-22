# GroceryShop

## environment requirements
-  Node.js in versions 14.20.x, 16.13.x or 18.10.x or higher. 

## Frontend development server
- make sure you use supported node version
- run `npm i`
- run `ng serve`

## Backend development server
- `cd backend/GroceryShop`
- `dotnet restore`
- `dotnet build`
- `dotnet run`

## Mock data or serve backend server
You can choose between mock frontend data and served backend served. By default fronend application set up to backend server on http://localhost:5092, but if you don't want to run backend you can change chart service in `main.ts` file: 
<br />
- from `providers: [{ provide: ShopStatisticsRepository, useClass: ShopStatisticsMockRepository }],`
- to `providers: [{ provide: ShopStatisticsRepository, useClass: ShopStatisticsLiveRepository }],`

## To support and conduct formatting use extensions
- "dbaeumer.vscode-eslint" [Link to marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- "esbenp.prettier-vscode" [Link to marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Testing Frontend
run `ng test` script to run tests
