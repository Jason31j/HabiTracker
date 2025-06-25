import express from "express";
import { Request, Response, NextFunction } from "express";
import { ExpressUserRouter } from "./User/infraestructure/ExpressUserRoute";


const app  = express();
app.use(express.json());

const PORT = process.env.EXPRESS_PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World! test');
    }
);

app.use( '/users',ExpressUserRouter);


app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        console.error(err.stack);
        return res.status(500).json({ message: err.message });
    }
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
