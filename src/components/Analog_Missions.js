import { Form } from "./Form";
export const Analog_Missions = () => {
    return (
        <>
            <div className="container p-5 my-5 bg-dark text-white text-center rounded-pill w-50">
                <h1 className="h1">Misiones Análogas</h1>
            </div>
            <Form field = "analogmissions"/>
        </>
    );
}