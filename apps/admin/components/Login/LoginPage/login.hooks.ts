import { useInput } from "@toppings/hooks";
import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useCallback } from "react";
import { useToast } from "~/hooks";
import { useLogin } from "~/server/auth";

export const useLoginState = () => {
  const { props: username } = useInput({});
  const { props: password } = useInput({});

  return {
    username,
    password
  };
};

export const useLoginSubmit = ({
  username,
  password
}: {
  username: string;
  password: string;
}) => {
  const { replace } = useRouter();
  const toast = useToast();

  const { mutate } = useLogin({
    onSuccess: () => {
      replace("/overview");
    },
    onError: () => {
      toast({
        title: "잘못된 아이디/패스워드 입니다.",
        description: "올바르게 작성되었는지 다시 한번 확인해주세요.",
        status: "error"
      });
    }
  });

  const onSubmitHandler = useCallback(
    (e: FormEvent<HTMLDivElement>) => {
      e.preventDefault();
      mutate({
        username,
        password
      });
    },
    [mutate, password, username]
  );

  return {
    onSubmitHandler
  };
};
