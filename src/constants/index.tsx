export const DEPARTMENTS = [
    'Electronics & Communication','Discrete Structure','ENGLISH'
]

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) =>(
    {value:dept,
    label:dept}
))


export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;