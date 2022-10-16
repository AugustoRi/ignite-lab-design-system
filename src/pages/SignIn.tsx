import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    await axios.post("/sessions", {
      email: "emailvalido@hotmail.com",
      password: "Senhavalida#10",
    });

    setIsUserSignedIn(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-100 bg-gray-900">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text className="mt-1 text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>

      <form onSubmit={handleSignIn} className="w-full max-w-sm mt-10 flex flex-col gap-4 items-stretch">
        { isUserSignedIn && (<Text size="sm" className="text-gray-400">Login realizado com sucesso!</Text>) }
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" id="password" placeholder="**********" />
          </TextInput.Root>
        </label>
        
        <label htmlFor="remember-my-account" className="flex items-center gap-2">
          <Checkbox id="remember-my-account" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>

    </div>
  );
}