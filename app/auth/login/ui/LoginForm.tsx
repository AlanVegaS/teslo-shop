'use client';

import Link from "next/link"
import { useActionState } from "react";
import { authenticate } from "@/actions/auth/login";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

export const LoginForm = () => {

    const [state, dispatch] = useActionState(authenticate, undefined);
    const { pending } = useFormStatus();

    return (
        <form action={dispatch}>
            <div className="flex flex-col">
                <label htmlFor="email">Correo electrónico</label>
                <input
                    className="px-5 py-2 border bg-gray-200 rounded mb-5"
                    name="email"
                    type="email" />
                <label htmlFor="email">Contraseña</label>
                <input
                    className="px-5 py-2 border bg-gray-200 rounded mb-5"
                    name="password"
                    type="password" />

                {state === 'Something went wrong.' && (
                    <div className="text-red-500 text-sm mb-2">
                        Invalid credentials!
                    </div>
                )}
                <button
                    type="submit"
                    className={clsx({
                        "btn-primary": !pending,
                        "btn-disabled": pending
                    })}
                    disabled={pending}
                >
                    Ingresar
                </button>
                {/* divisor l ine */}
                <div className="flex items-center my-5">
                    <div className="flex-1 border-t border-gray-500"></div>
                    <div className="px-2 text-gray-800">O</div>
                    <div className="flex-1 border-t border-gray-500"></div>
                </div>
                <Link
                    href="/auth/new-account"
                    className="btn-secondary text-center">
                    Crear una nueva cuenta
                </Link>
            </div>
        </form>
    )
}