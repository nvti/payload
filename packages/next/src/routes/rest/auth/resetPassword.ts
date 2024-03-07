import httpStatus from 'http-status'
import { generatePayloadCookie } from 'payload/auth'
import { resetPasswordOperation } from 'payload/operations'

import type { CollectionRouteHandler } from '../types.d.ts'

export const resetPassword: CollectionRouteHandler = async ({ collection, req }) => {
  const { searchParams } = req
  const depth = searchParams.get('depth')

  const result = await resetPasswordOperation({
    collection,
    data: {
      password: typeof req.data?.password === 'string' ? req.data.password : '',
      token: typeof req.data?.token === 'string' ? req.data.token : '',
    },
    depth: depth ? Number(depth) : undefined,
    req,
  })

  const cookie = generatePayloadCookie({
    collectionConfig: collection.config,
    payload: req.payload,
    token: result.token,
  })

  if (collection.config.auth.removeTokenFromResponses) {
    delete result.token
  }

  return Response.json(
    {
      // TODO(translate)
      message: 'Password reset successfully.',
      ...result,
    },
    {
      headers: new Headers({
        'Set-Cookie': cookie,
      }),
      status: httpStatus.OK,
    },
  )
}