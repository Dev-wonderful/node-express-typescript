import { Response } from "express";

type Data = { [key: string]: any };
type Status = "success" | "error";
interface JsonResponse {
  responseCtx: Response;
  status: Status;
  statusCode: number;
  message: string;
  data?: Data;
}

/**
 * Sends a JSON response with a standard structure.
 *
 * @param responseCtx - The Express response object.
 * @param status - The status of the response. Can be "success" or "error".
 * @param statusCode - The HTTP status code to send.
 * @param message - The message to include in the response.
 * @param data - The data to include in the response. Can be any type.
 */
const sendJsonResponse = ({
  responseCtx,
  status,
  statusCode,
  message,
  data,
}: JsonResponse) => {
  const responsePayload: any = {
    status,
    message,
    data,
  };

  responseCtx.status(statusCode).json(responsePayload);
};

export { sendJsonResponse };
